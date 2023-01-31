const ButtonGiveaway = require("./ButtonGiveaway");
const GiveawaysManager = require("./Manager");

class GiveawaysButtonManager extends GiveawaysManager {
  constructor(client, options, init = true) {
    super(client, options, init = true);
    /**
     * Array of giveaways
     * @type {ButtonGiveaway}
     */
    this.giveaways = [];
  }
}