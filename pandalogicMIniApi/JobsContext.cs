using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace pandalogicMIniApi

{
    public class JobsContext : DbContext
    {
        public JobsContext()
        {
        }

        public JobsContext(DbContextOptions<JobsContext> options) : base(options)
        {

        }

        public DbSet<Test_JobTitles> Test_JobTitles { get; set; }
        public DbSet<Test_Jobs> Test_Jobs { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Test_JobTitles>().ToTable("Test_JobTitles");
            modelBuilder.Entity<Test_JobTitles>().HasKey(j => j.JobTitleId);
            modelBuilder.Entity<Test_Jobs>().ToTable("Test_Jobs");
            modelBuilder.Entity<Test_Jobs>().HasKey(j => j.JobId);
            base.OnModelCreating(modelBuilder);
        }
    }

    public class Test_JobTitles
    {
        public int JobTitleId { get; set; }
        public string? JobTitleName { get; set; }
        public int CategoryId { get; set; }
    }
    public class Test_Jobs
    {
        public int JobId { get; set; }
        public int JobTitleId { get; set; }
        public int CategoryId { get; set; }
        public int DescriptionLength { get; set; }
        public int EducationLevel { get; set; }
        public int Clicks { get; set; }
        public int Applicants { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
    }

}
