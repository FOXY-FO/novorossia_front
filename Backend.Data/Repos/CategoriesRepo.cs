namespace Backend.Data.Repos
{
    public interface ICategoriesRepo
    {
        string GetCategory(int id);

        void ChangeCategory(int id);

        void DeleteCategory(int id);
    }
    public class CategoriesRepo : ICategoriesRepo
    {
        public void ChangeCategory(int id)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteCategory(int id)
        {
            throw new System.NotImplementedException();
        }

        public string GetCategory(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}