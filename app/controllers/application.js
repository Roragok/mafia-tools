import Controller from '@ember/controller';
import { oneWay } from '@ember/object/computed';
import { set } from '@ember/object';

export default Controller.extend({
  signed_players: "",

  outputPlayers: oneWay("signed_players"),

  buildTeam: false,

  players: "",

  role: "" ,



  actions: {
    generateTeams(players, roles) {
       console.log(players);
       let player_array = players.split("\n");
       let player_html = "<ul>";
       console.log(roles);
       for(let signed_player of player_array){
         player_html += "<li>" + signed_player + "</li>";
       }
       player_html += "</ul>";
       set(this,"players", player_html);
       set(this, "buildTeam", true);
    }
  }


});
