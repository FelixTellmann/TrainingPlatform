const { database } = require('../../lib/database');
import { NextApiRequest, NextApiResponse } from 'next';
import { NavigationData } from 'pages/_app';



export default async (req: NextApiRequest, res: NextApiResponse) => {
  const navigation = (await database.query(`SELECT * FROM navigation`))[0];
  const sidemenu = (await database.query(`SELECT * FROM navigation_sidemenu`))[0];
  const dropdown = (await database.query(`SELECT * FROM navigation_dropdown`))[0];
  const item = (await database.query(`SELECT * FROM navigation_item`))[0];


  const data: NavigationData = navigation.map((navigation_item) => {
    navigation_item.sidemenu = sidemenu.filter((sidemenu_item) => {
      if (navigation_item.id === sidemenu_item.navigation_id) {
        sidemenu_item.dropdown = dropdown.filter((dropdown_item) => {
          if (sidemenu_item.id === dropdown_item.navigation_sidemenu_id) {
            dropdown_item.item = item.filter((item) => {
              return item.navigation_dropdown_id === dropdown_item.id;
            });
            return dropdown_item;
          }
        });
        return sidemenu_item;
      }
    });
    return navigation_item;
  });

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
}
