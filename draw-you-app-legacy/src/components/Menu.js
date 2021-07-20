import React, { useState, useEffect, useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';

const Menu = ()=>{

    const itens = [ 
        {
            label:'Guias',
            icon:'pi pi-fw pi-book',
            items:[
                {
                    label:'Ilustrações'
                },
                {
                    label:'Placas Personalizadas'
                }
            ]
        },
        {
            label:'Orçamentos',
            icon:'pi pi-fw pi-wallet',
            items:[
                {
                    label:'Ilustrações',
                    items:[
                        {
                            label:'Pintura Digital'
                        },
                        {
                            label:'Lineart'
                        }
                    ]

                },
                {
                    label:'Logomarca e Marca D\'água',
                }
            ]
        },
        {
            label:'Encomenda',
            icon:'pi pi-fw pi-table',
            items:[
                {
                    label:"Placa Personalizada em Design Criativo",
                }
            ]
        },
        {
            label:'Sobre',
            icon:'pi pi-fw pi-user'
        },
        {
            label:'Links úteis',
            icon:'pi pi-fw pi-globe'
        }
    ]
    return(
        <div className="p-grid">
            <TieredMenu className="p-col-12" model={itens}></TieredMenu>
        </div>
    )
}

export default Menu;