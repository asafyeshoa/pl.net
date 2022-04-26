using Microsoft.EntityFrameworkCore;
using pandalogicMIniApi;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<JobsContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("JobDb")));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.WithOrigins("*")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});
var app = builder.Build();

app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Access-Control-Allow-Header", "http://localhost:3000");
    await next.Invoke();
});

app.MapGet("/api/jobsTitles", async (JobsContext db) => {
    var titles = await db.Test_JobTitles.ToListAsync();
    var jobs = await db.Test_Jobs.ToListAsync();
    return new AllObjects(jobs, titles);
    });




app.Run();
