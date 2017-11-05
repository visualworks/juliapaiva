import React, {Component} from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img src="/img/logo-julia-paiva.png" alt="Julia Paiva" title="Julia Paiva" />
                        <span className="icon is-large has-text-dark">
                            <a href="https://www.instagram.com/juliapaivajoias" target="_blank"><i className="fa fa-instagram fa-3x"></i></a>
                        </span>
                        <span className="icon is-large has-text-info">
                            <a href="https://www.facebook.com/juliapaiva.joias" target="_blank"><i className="fa fa-facebook fa-3x"></i></a>
                        </span>
                        <span className="icon is-large has-text-success">
                            <a href="https://api.whatsapp.com/send?phone=5521992940980" target="_blank"><i className="fa fa-whatsapp fa-3x"></i></a>
                        </span>
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container has-text-centered">
                        {/* <div className="fb-page" data-href="https://www.facebook.com/juliapaiva.joias" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/juliapaiva.joias" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/juliapaiva.joias">Julia Paiva</a></blockquote></div> */}
                    </div>
                </div>
            </section>
        );
    }
}