namespace Backend.Data.Repos
{
    public interface IUserRepo
    {
        object[] GetUsers(int pageSize, int pageNumber);
    }
    public class UserRepo : IUserRepo
    {
        public object[] GetUsers(int pageSize, int pageNumber)
        {
            throw new System.NotImplementedException();
        }
    }
}