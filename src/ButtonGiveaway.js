const Giveaway = require("./Giveaway");

class ButtonGiveaway extends Giveaway {
  constructor(manager, options) {
    super(manager, options);
    /**
     * User ID of participants enter into the giveaway.
     * @type {string[]}
     */
    this.participants = [];
  }
}

module.exports = ButtonGiveaway;
