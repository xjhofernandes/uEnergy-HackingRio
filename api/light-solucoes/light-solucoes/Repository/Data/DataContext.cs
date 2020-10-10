using Microsoft.EntityFrameworkCore;

namespace light_solucoes.Repository.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        { }
    }
}
