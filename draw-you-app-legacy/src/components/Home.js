import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu';

const Home = ()=>{

    const style = {
        principal:{
            'width': '90%',
            'margin': 'auto',
            'postion':'relative', 
            'height':'300px'
            //'display':'inline-block'
        },
        header:{
            'backgroundColor':'black',
            //'display':'block',
            'height': '100px',
            //'position': 'absolute'
        },
        section:{
            'height':'400px'
        },
        footer:{
            'backgroundColor':'black',
            'height':'100px'
        }
    }

    return (
        <div id="principal" className="p-grid" style={style.principal}>

            <header className="p-grid" style={style.header}>
               
            </header>

            <section className="p-grid" id="conteudo" style={style.section} >
                
                <Menu className="p-col-12"></Menu>
               
                <section>

                </section>
            </section>

            <footer className="p-grid" style={style.footer}>

            </footer>
           

            
        </div>
    );
}

export default Home;