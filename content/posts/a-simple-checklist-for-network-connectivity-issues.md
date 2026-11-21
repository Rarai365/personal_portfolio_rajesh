---
title: A simple checklist for network connectivity issues
date: 2026-11-14
tags: networking, troubleshooting
summary: The order I check things in when a user says "the internet isn't working".
---

When someone says the internet is down, the fastest path is to work from the bottom of the stack upwards.

## The checklist

1. **Physical and wireless:** is the cable seated, or is Wi-Fi connected to the right network?
2. **IP configuration:** does the device have a valid address, or a `169.254.x.x` fallback?
3. **Gateway:** can the device reach its default gateway?
4. **DNS:** can it resolve names, or only reach IP addresses?
5. **Application layer:** is it just one site or service, or everything?

## Handy commands

```
ipconfig /all
ping 8.8.8.8
nslookup example.com
```

If an IP address works but a name doesn't, the problem is almost always DNS.
