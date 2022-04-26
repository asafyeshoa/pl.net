namespace pandalogicMIniApi
{
    public class AllObjects
    {
        public AllObjects(List<Test_Jobs>A,List<Test_JobTitles> B)
        {
            TestJobs = A;
            TestJobTitles = B;
        }
        public List<Test_JobTitles> TestJobTitles { get; set; }
         public  List<Test_Jobs> TestJobs { get; set; }


    }
}
