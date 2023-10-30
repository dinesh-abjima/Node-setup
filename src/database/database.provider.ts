import { Sequelize } from 'sequelize-typescript';
import { CatDto } from './domains/cat.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'YOURDATABASEUSERNAME',
        password: 'YOURDATABASEPASSWORD',
        database: 'Catering',
        define: {
          freezeTableName: true,
          createdAt: false,
          updatedAt: false,
        },
      });

      /**
       * Add Models Here
       * ===============
       * You can add the models to
       * Sequelize later on.
       */
      sequelize.addModels([
        CatDto
      ]);

      // await sequelize.sync();
      return sequelize;
    },
  },
];