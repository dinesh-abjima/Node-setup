import { Sequelize } from "sequelize";
const sequelize = new Sequelize("mssql://Server=localhost;Database=Northwind;Integrated Security=True",{
    dialect: 'mssql',
    dialectOptions: {
        options: {
          trustedConnection: true, // Use Windows authentication
        },
      },
      port:42050
  });

export default sequelize;
// mssql://:@mydatabase.database.windows.net:42050/Northwind