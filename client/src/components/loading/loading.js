import React, { Component } from 'react';
import $ from "jquery";
import './style.css';

class Loading extends Component {

  componentDidMount(){
    var duration = 600;
    $(".loader")
      .html(
        "<div class='piece'>" +
          $(".loader").html().match(/.{1,2}/g).join("</div><div class='piece'>") +
          "</div>"
      )
      .addClass("active");

    var show = function(elem) {
      $(".piece").css({ opacity: 0 });
      $(elem).css({ opacity: 1 });

      setTimeout(function() {
        show(elem);
      }, duration * $(".piece").length);
    };

    $(".piece").each(function(i, e) {
      setTimeout(function() {
        show(e);
      }, duration * i);
    });
  }

  render(){
    return(
      <div className='loaderContainer'>
        <div className="loader">SEVENS</div>
      </div>
    )
  }
}

export default Loading;