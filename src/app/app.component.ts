import { Component, OnInit } from '@angular/core';
import { User, MenuService, Message, MessagesService } from 'ngx-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define here your own links menu structure
  private mylinks: any = [
    {
      'title': 'Hot Info',
      'icon': 'bullhorn',
      'link': ['/page/home']
    },
    // {
    //   'title': 'Dashboard',
    //   'icon': 'dashboard',
    //   'link': ['/dashboard']
    // },
    
    
    {
      'title': 'User Info',
      'icon': 'user',
      'sublinks': [
        {
          'title': 'My Earning',
          'link': ['/myearning'],
        },
        {
          'title': 'My Visit',
          'link': ['/myvisit'],
        },
        {
          'title': 'My Profile',
          'link': ['/myprofile']
        }
      ]
    },
    {
      'title':'Gallery',
      'icon':'file-photo-o',
      'link': ['/gallery'],
    },
    {
      'title': 'Category Wise Offers',
      'icon': 'shopping-cart',
      'sublinks': [
      {
		  'title': 'Fashion',
		  'link': ['/page/fashion-offers'],
	  },
	  {
		  'title': 'Travel',
		  'link': ['/page/travel-offers'],
	  },
      {
		  'title': 'Recharge & Bill',
		  'link': ['/page/recharge-bill-offers'],
	  },
      {
		  'title': 'Health & Beauty',
		  'link': ['/page/health-beauty-offers'],
	  },
      {
		  'title': 'Electronics',
		  'link': ['/page/electronics-offers'],
	  }
	 ]
    },
    {
      'title': 'Payment Gateway Offers',
      'icon': 'credit-card',
      'link': ['/payment']
    },
    {
      'title': 'Online Stores Info',
      'icon': 'shopping-cart',
      'sublinks': [
      {
		  'title': 'Fashion',
		  'link': ['/page/fashion-stores'],
	  },
      {
		  'title': 'Electronics',
		  'link': ['/page/electronics-stores'],
	  },

      {
		  'title': 'Home & Kitchen',
		  'link': ['/page/home-kitchen-stores'],
	  },
	  {
		  'title': 'Travel',
		  'link': ['/page/travel-stores'],
	  },
      {
		  'title': 'Recharge & Bill',
		  'link': ['/page/recharge-bill-stores'],
	  },
      {
		  'title': 'Health & Beauty',
		  'link': ['/page/health-beauty-stores'],
	  },
	  {
		  'title': 'All Stores (A to Z)',
		  'link': ['/page/all-stores'],
	  }
	 ]
    },
    {
      'title': 'Shopping Guidance',
      'icon': 'graduation-cap',
      'sublinks': [
        {
          'title': 'World Of Online Shopping',
          'link': ['/page/worldof-online-shopping'],
        },
        {
          'title': 'Deals and Offers',
          'link': ['/page/deals-offers-guide'],
        },
        {
          'title': 'About SSD',
          'link': ['/page/about-ssd'],
        },
        // {
        //   'title': 'Fashion & Accessories Shopping ',
        //   'link': ['/page/ne-shopping'],
        // },
        {
          'title': 'Fashion',
          'link': ['/page/fashion-guide'],
        },
        // {
        //   'title': 'Appliances',
        //   'link': ['/page/appliances-guide'],
        // },
        {
          'title': 'Electronics',
          'link': ['/page/electronics-guide'],
        },
        {
          'title': 'Health',
          'link': ['/page/health-guide'],
        },
        {
          'title': 'Cosmetics',
          'link': ['/page/cosmetics-guide'],
        },
        {
          'title': 'Travel',
          'link': ['/page/travel-guide'],
        },
         {
          'title':'Furniture',
          'link': ['/page/furniture-guide'],
        }
      ]
    },
    {
      'title': 'Shopping Assessment',
      'icon': 'file-text',
      'sublinks': [
        {
          'title': 'Basics of Shopping Assessment',
          'link': ['/page/basic-assessment'],
        },
        {
          'title': 'How Cashlu works Assessment',
          'link': ['/page/cashluWorks-assessment'],
        },
        {
          'title': 'Shopping Practice',
          'link': ['/page/shopping-practice-assessment'],
        },
        {
          'title': 'Electronics',
          'link': ['/page/electronics-assessment'],
        },
        // {
        //   'title': 'Appliances',
        //   'link': ['/page/appliances-assessment'],
        // },
        {
          'title': 'Travel',
          'link': ['/page/travel-assessment'],
        },
        {
          'title': 'Health',
          'link': ['/page/health-assessment']
        },
        {
          'title': 'Fashion',
          'link': ['/page/fashion-assessment']
        },
        {
          'title': 'Furniture',
          'link': ['/page/furniture-assessment']
        }
      ]
    },
    {
      'title': 'Business Guidance',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Step by Step Guide',
          'link': ['/page/step-by-step-guide'],
        },
        {
          'title': 'Introduction',
          'link': ['/page/introduction'],
        },
        {
          'title': 'How to Start',
          'link': ['/page/how-to-start'],
        },
        {
          'title': 'Set Up Business',
          'link': ['/page/set-up-business'],
        },
        {
          'title': 'How SSD Works',
          'link': ['/page/how-ssd-works'],
        },
        {
          'title': 'How CashLu Works',
          'link': ['/page/how-cashlu-works'],
        },
        {
          'title': 'Marketing Guidance',
          'link': ['/page/marketing-guidance'],
        }
      ]
    },
	{
      'title': 'My Plans',
      'icon': 'users',
      'sublinks': [
        {
          'title': 'SSD Plans',
          'link': ['/page/ssd-plans'],
        },
	    {
          'title': 'Master Adviser Plan',
          'link': ['/page/master-adviser-plan'],
        }
	  ]
	},
    {
      'title': 'Start Shopping',
      'icon': 'money',
      'link': ['http://cashlu.com'],
      'external': true,
      'target': '_blank'
    }/*,
    {
      'title': 'External Links',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Github',
          'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
          'icon': 'github',
          'external': true,
          'target': '_blank'
        },
        {
          'title': 'Yahoo',
          'link': ['http://yahoo.com'],
          'icon': 'yahoo',
          'external': true,
          'target': '_blank'
        }
      ]
    }*/
  ];

  constructor(
    private menuServ: MenuService,
    private msgServ: MessagesService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrentMenu(this.mylinks);

    // FAKE MESSAGE 
    // defining some test users
    /*const user1 = new User( {
        avatarUrl: 'public/assets/img/user2-160x160.jpg',
        email: 'weber.antoine.pro@gmail.com',
        firstname: 'WEBER',
        lastname: 'Antoine'
    });
    const user2 = new User( {
        avatarUrl: 'public/assets/img/user2-160x160.jpg',
        email: 'EMAIL',
        firstname: 'FIRSTNAME',
        lastname: 'LASTNAME'
    });
    // sending a test message
    this.msgServ.addMessage( new Message( {
        author: user2,
        content: 'le contenu d\'un message d\'une importance extreme',
        destination: user1,
        title: 'un message super important'
    }) );*/
  }

}
