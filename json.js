
const json = {
  "logoPosition": "right",
  "progressBarType": "questions",
  "showProgressBar": "top",
  "pages": [
   {
    "name": "Page1",
    "title": "GitHub Enterprise EMU Health Assessment",
    "elements": 
[
  {
    "description": "Identity",
    "title": "Do you have more than one Enterprise Admin? ",
    "name": "question1",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#about-organization-membership-management",
    "helpURLTitle": "About organization membership management"
  },
  {
    "description": "Identity",
    "title": "Have you setup billing managers? ",
    "name": "question2",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Identity",
    "title": "Are you syncronizing IdP groups which you can link to GitHub Teams?",
    "name": "question3",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Policies - repos",
    "title": "Have you selected the types of repos you want your users to create? Private/internal",
    "name": "question4",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Policies - repos",
    "title": "Do you want forking enabled/disabled for all orgs?",
    "name": "question5",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Policies - repos",
    "title": "Who can change repo visibility between private and internal?",
    "name": "question6",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Policies - repos",
    "title": "Do you allow deletion/transfer of repos  by members or just org owners?",
    "name": "question7",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Policies - repos",
    "title": "Do you allow issues to be deleted by members or just org owners?",
    "name": "question8",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Codspaces",
    "title": "Are you enabling enterprise wide?",
    "name": "question9",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Copilot",
    "title": "Will you block matching public code suggestions for all orgs? ",
    "name": "question10",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Copilot",
    "title": "Will you enable copilot chat in the whole enterprise or set at org level?",
    "name": "question11",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Copilot",
    "title": "Which orgs can enable Copilot? You can select a subset of orgs or the whole enterprise",
    "name": "question12",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Actions",
    "title": "Will you allow self-hosted runners at repo level? ",
    "name": "question13",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Actions",
    "title": "Will you allow Runners against personal EMU namespaces? ",
    "name": "question14",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Code security and analysis",
    "title": "Will you get repo admins enable/disable secret scanning and code scanning?",
    "name": "question15",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Settings - Billing",
    "title": "Have you set a spending limit and enabled alerts at 75/90/100%? ",
    "name": "question16",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Settings - Billing",
    "title": "Have you setup billing emails? ",
    "name": "question17",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Settings - Billing",
    "title": "Have you added an Azure subscription to payment information? ",
    "name": "question18",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Settings - Authentication Security",
    "title": "Do you have your recovery codes from the setup user somewhere very safe? ",
    "name": "question19",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Settings - Authentication Security",
    "title": "Will you automatically redirect users to your sign in page?",
    "name": "question20",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Settings - Authentication Security",
    "title": "Have you enabled the IP allow list for your IdP? (OIDC) or set restrictions (SAML) ",
    "name": "question21",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Code security and analysis",
    "title": "Have you at a minimum enabled push protection? ",
    "name": "question22",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Code security and analysis",
    "title": "Have you enabled Dependabot by default to protect against supply chain attacks?",
    "name": "question23",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Code security and analysis",
    "title": "Do you have a custom push protection URL to show to your users some help text?",
    "name": "question24",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Verified domains",
    "title": "Have you added approved domains so you can make sure alerts don't go to domains you don't want to share with?",
    "name": "question25",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Audit log",
    "title": "Audit Log Stream Enabled to keep over 3 months of logs if you require this? https://github.com/enterprises/stucorp/settings/audit-log/stream ",
    "name": "question26",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Audit log",
    "title": "Source IP Disclosure enabled?        ",
    "name": "question27",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Audit log",
    "title": "Audit Log API Request Events Enabled? ",
    "name": "question28",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  },
  {
    "description": "Support",
    "title": "Have you set the members who can raise support cases with GitHub? (up to 20) ",
    "name": "question29",
    "type": "boolean",
    "showCommentArea": "true",
    "commentText": "Comment",
    "helpURL": "https://docs.github.com/en/enterprise-cloud@latest/",
    "helpURLTitle": "example"
  }
]
   }
  ]
 }

