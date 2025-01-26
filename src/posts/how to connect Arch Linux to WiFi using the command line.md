---
title: How to connect Arch Linux to WiFi using the command-line
author: Ronald Otieno
date: 2025-1-26
layout: blog
published: true
excerpt: Learn how to connect your Linux machine to WiFi with iwctl (iNet wireless Daemon) from the command-line. Very handy during Arch Linux installation or running a server.
---

**IWCTL** is the command-line client for **IWD**, which stands for **iNet Wireless Daemon**.
This is a linux tool that manages wireless devices and connects to Wi-Fi.
IWCTL can be used to:
- Add, remove, and configure network connections.
- List available commands.
- Get list of WiFi devices.
- Turn a device on or off.
- Scan for available WiFi networks.
Iwctl can be used in command line mode or interactive mode.
Get into the interactive mode by typing `iwctl`.
Notice the prefix `[iwd]#` to identify the prompt.
Use the Tab key to auto-complete commands and device names.
Exit the prompt by pressing Ctrl+d or typing `exit`.

## Step 1: Open iwctl interactive mode
`iwctl`

## Step 2: Identify Your Wireless Device.
Run `device list`

## Step 3: Enable the device
Use `device <device_name> set-property Powered On`

## Step 4: Scan for the networks.
Execute `station <device_name> scan`

## Step 5: View available networks
Run `station <device_name> get-networks` to see the list of detected networks.

## Step 5: View available networks
Use `station <device_name> connect <SSID>` to connect to your desired network.

