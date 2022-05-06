import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  {
    label: 'Web Apps',
    isTitle: true
  },
  {
    label: 'Email',
    icon: 'mail',
    subItems: [
      {
        label: 'Inbox',
        link: '/apps/email/inbox',
      },
      {
        label: 'Read',
        link: '/apps/email/read'
      },
      {
        label: 'Compose',
        link: '/apps/email/compose'
      },
    ]
  },
  {
    label: 'Association',
    icon: 'credit-card',

    subItems: [
      {
        label: 'table association',
        link: '/association',

      },
      {
        label: 'payments',
        link: '/payment_association',

      }
    ]
  },
  {
    label: 'Treasury',
    icon: 'gift',

    subItems: [
      {
        label: 'Check Treasury',
        link: '/treasury',

      }
    ]
  },
  {
    label: 'Payment',
    icon: 'credit-card',

    subItems: [
      {
        label: 'Retrieve Payments',
        link: '/payment',

      }
    ]
  },
  {
    label: 'Transaction',
    icon: 'arrow-right-circle',

    subItems: [
      {
        label: 'Retrieve Transactions',
        link: '/transaction',

      },{
        label: 'Add new transaction',
        link: '/addtransaction',



      }
    ]
  },
  {
    label: 'Claim',
    icon: 'alert-triangle',

    subItems: [
      {
        label: 'Retrieve Claims',
        link: '/claim',

      },
    ]
  },{
    label: 'Offer',
    icon: 'heart',

    subItems: [
      {
        label: 'Retrieve Offers',
        link: '/offer',

      },
    ]
  },
  {
    label: 'Feedback',
    icon: 'mail',

    subItems: [
      {
        label: 'Retrieve Feedbacks',
        link: '/feedback',

      },
    ]
  }
];
