/**
 * projects.js — the Projects page reads this list.
 *
 * HOW TO ADD A PROJECT: copy one object, paste it at the TOP of the array
 * and edit the fields. That's it — the page, filters and Home preview update.
 *
 * Fields:
 *   title    (string)   Project name
 *   year     (string)   Optional, shown top-right on the card
 *   summary  (string)   One or two sentences
 *   tags     (string[]) Used for the filter buttons
 *   points   (string[]) Key outcomes (optional)
 *   link     (string)   Optional URL (GitHub, write-up, demo)
 *   featured (boolean)  true = also shown on the Home page
 */
export const projects = [
  {
    title: "Azure Infrastructure Deployment Lab",
    summary: "A multi-tier Azure environment built from scratch and automated with ARM templates.",
    tags: ["Azure", "ARM Templates", "Networking", "RBAC"],
    points: [
      "Built Virtual Networks, NSGs, VMs and Azure AD integration.",
      "Automated provisioning with ARM templates, cutting manual setup time by ~60%.",
      "Configured Azure Backup and tested recovery to validate RTO/RPO targets.",
      "Applied RBAC across resource groups to enforce least privilege.",
    ],
    featured: true,
  },
  {
    title: "Microsoft 365 Tenant Migration & Hardening",
    summary: "Tenant-to-tenant migration of 50+ users with a security baseline applied end to end.",
    tags: ["Microsoft 365", "Intune", "Security", "Exchange"],
    points: [
      "Migrated mailboxes, SharePoint data and Teams channels for 50+ users.",
      "Enforced Conditional Access and MFA, removing legacy authentication.",
      "Configured Defender for Endpoint and onboarded devices for threat visibility.",
      "Implemented Intune compliance policies and Autopilot enrolment.",
    ],
    featured: true,
  },
];
