const servicesTab = {
  headings: ['Services', 'All about what we offer'],
  sections: [
    {
      heading: 'Overview',
      subtitle: '',
      paragraphs: [
        'Redbrick offers a great range of services to our members, and we are always looking for more to offer. If you have any ideas, feel free to mail us with your suggestions.',
        'Since 1996, we have been providing people with an excellent, powerful and flexible UNIX environment. We have used Solaris, Linux and FreeBSD, some more than others.',
        'First off, we give you 2GB of disk space by default - having somewhere online to store files and mail is essential these days, especially if you log on from a wide range of locations. We also provide you with your own Email account, and a great range of clients to read/write it with! Procmail and other mail filtering software is installed, so if you feel like it, you can heavily customise mail folders and really make the most of your mail account.',
        'Many people love to code, you can log on to Pygmalion, our development server, which has every compiler under the sun installed, and if you find we don’t have the one that you need, let us know and we will try help you out. You should always back up your code. What better way to do this than with a distributed source code management system. We have git installed on Redbrick so have a look here at how to get started, and check out Redbrick Git for free git hosting!',
      ],
    },
    {
      heading: 'Mail',
      subtitle: '',
      paragraphs: [
        'Once you have your username and password you can use the webmail service we offer on Redbrick. Mail from your Redbrick address auto goes to your DCU email. This can stop by typing forward off in terminal on Redbrick, but we don’t know why you’d want to do a thing like that. Read more about webmail here.',
      ],
    },
    {
      heading: 'Hosting',
      subtitle: '',
      paragraphs: [
        'We currently offer 2 different types of web hosting:',
        'https://[username].redbrick.dcu.ie - per user subdomains is on by default for all users',
        'https://something.com/ - Custom domain hosting is also available, where the hostname is that of a domain you own, all you have to do is Email the Webmaster and get your DNS provider to point the domain at our IP address. We also ask that users who have virtual hosts link their site to our homepage.',
      ],
    },
    {
      heading: 'Coding',
      subtitle: '',
      paragraphs: [
        'Redbrick is a great place to learn or use a vast range of programming languages, we have compilers, interpreters and libraries for:',
        'Java, C++/C, Assembly, Pascal, Perl, Python, PHP, Ruby, Shell, Haskell, Objective C, NodeJs, Go',
        'Additionally we provide databases for projects and personal use. Hit up an Admin for more information!',
      ],
    },
  ],
};

export default servicesTab;
