#!/usr/bin/env node
import * as client from "./src/cli.js";

client.welcomeUser("node bin/brain-games.js");
const userName = client.getUserName();
client.greetUser(userName);