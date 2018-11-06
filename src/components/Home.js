import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state ={
        }
    }
  
  
    render() {
      var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap position-fixed">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
      
        setTimeout(function() {
        that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
      };
        const { displayValue }= this.state
      return (

        <div>
          <div href="" class="typewrite rwdtitle" data-period="2000" data-type='[ "又是早八？", "懷疑人生？", "只想睡覺？", "今天也很厭世?"]'>
          <span class="wrap"></span></div>
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <div>
        <Link to ={'/quiz'}><button type="button" class="button rwdbtn">是【Y】</button></Link>
        </div>
        
        </div>
      );
    }
  }
  
  export default HomePage;
  