import React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed } from "mobx";
import { observer } from "mobx-react";


@observer export default class Dashboard extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = {
            x: "hello"
        };
    }

    bunny() {
        var secretkey;
        try {
            if(sessionStorage.getItem('key')) {
                return secretkey = < GetSecretKey key={sessionStorage.getItem('key')} />;
            } else {
               return  secretkey = < SetSecretKey />;
            }
        } catch (e) {
            if (e instanceof ReferenceError) {
                return secretkey = < SetSecretKey />;
            }
        }
    }*/

    render() {

        var secretkey;
            if(sessionStorage.getItem('key')) {
                secretkey = < GetSecretKey key={sessionStorage.getItem('key')} />;
            } else {
               secretkey = < SetSecretKey />;
            }


        return (
            <div>
                I am dumb dashboard
            </div>
        )
    }
}