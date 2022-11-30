using Dapper;
using lanyuanApi.Models;
using System.Data.Odbc;

namespace lanyuanApi.DbContext
{
    public class AccessContextcs
    {
        public OdbcConnection Connection { get; set; } = default!;
        public AccessContextcs()
        {
            string connectionString = "Driver={Microsoft Access Driver (*.mdb, *.accdb)}; Dbq=D:\\Git\\Github\\00_Source\\ng-homestay\\WebApi\\lanyuanApi\\DbContext\\AccessUsers.accdb; ";
            Connection = new OdbcConnection(connectionString);
        }

        public IEnumerable<Information> InformationData()
        {
            var queryText = "SELECT * FROM Information";
            var data = Connection.Query<Information>(queryText);
            return data.AsEnumerable();
        }

    }
}
