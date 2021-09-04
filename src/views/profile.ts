export const PROFILE_SETTING = [
    {
        image: process.env.PUBLIC_URL + '/assets/icon/IconDark.png',
        title: 'Dark Mode',
        isEvent: true,
        button: false,
    },
    {
        image: process.env.PUBLIC_URL + '/assets/icon/icon2.png',
        title: 'Active Status',
        endText: 'On',
        button: true,
    },
    {
        image: process.env.PUBLIC_URL + '/assets/icon/icon3.png',
        title: 'Username',
        endText: 'm.me/Jacob_d ',
        button: true,
    },
    {
        image: process.env.PUBLIC_URL + '/assets/icon/icon4.png',
        title: 'Phone',
        endText: '+1 202 555 0147',
        button: true,
    },
    {
        image: process.env.PUBLIC_URL + '/assets/icon/icon5.png',
        title: 'Notifications & Sounds',
        button: true,
    },
    {
        image: process.env.PUBLIC_URL + '/assets/icon/icon6.png',
        title: 'People',
        button: true,
    },
]

export const ITEM_OPTION_PROFILE_FRIENDS = [
    {
        icon: process.env.PUBLIC_URL + '/assets/svg/call-light.svg',
        text: 'Audio',
    },
    {
        icon: process.env.PUBLIC_URL + '/assets/svg/vedio-light.svg',
        text: 'Video',
    },
    {
        icon: process.env.PUBLIC_URL + '/assets/svg/profile-light.svg',
        text: 'Profile',
    },
    {
        icon: process.env.PUBLIC_URL + '/assets/svg/mute-light.svg',
        text: 'Mute',
    },
]

export const MENU_SETTING_PROFILE_FRIEND = [
    {
        title: '',
        menu: [
            {
                title: 'color',
                icon: process.env.PUBLIC_URL + '/assets/svg/like-primary.svg',
                isIcon: true,
                button: true,
            },
            {
                title: 'Emoji',
                icon: process.env.PUBLIC_URL + '/assets/svg/like-primary.svg',
                isIcon: true,
                button: true,
            },
            {
                title: 'Nicknames',
                isIcon: false,
                button: true,
            },
        ],
    },
    {
        title: 'More actions',
        menu: [
            {
                title: 'Search in Conversation',
                icon: process.env.PUBLIC_URL + '/assets/svg/search-light.svg',
                isIcon: true,
                button: true,
            },
            {
                title: 'Create group',
                icon: process.env.PUBLIC_URL + '/assets/svg/group-light.svg',
                isIcon: true,
                button: true,
            },
        ],
    },
    {
        title: 'Privacy',
        menu: [
            {
                title: 'Notifications',
                textEnd: 'On',
                isIcon: false,
                button: true,
            },
            {
                title: 'Ignore Messages',
                icon: process.env.PUBLIC_URL + '/assets/svg/ignore-light.svg',
                isIcon: true,
                button: true,
            },
            {
                title: 'Block',
                isIcon: false,
                button: true,
            },
        ],
    },
]
