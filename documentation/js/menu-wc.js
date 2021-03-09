'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bob-tours documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4afd4577fc58c0dca835aac9a21d77fb"' : 'data-target="#xs-components-links-module-AppModule-4afd4577fc58c0dca835aac9a21d77fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4afd4577fc58c0dca835aac9a21d77fb"' :
                                            'id="xs-components-links-module-AppModule-4afd4577fc58c0dca835aac9a21d77fb"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsPageModule.html" data-type="entity-link">DetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailsPageModule-ee27b361379dcb31f05ad710d20d216c"' : 'data-target="#xs-components-links-module-DetailsPageModule-ee27b361379dcb31f05ad710d20d216c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailsPageModule-ee27b361379dcb31f05ad710d20d216c"' :
                                            'id="xs-components-links-module-DetailsPageModule-ee27b361379dcb31f05ad710d20d216c"' }>
                                            <li class="link">
                                                <a href="components/DetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsPageRoutingModule.html" data-type="entity-link">DetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesPageModule.html" data-type="entity-link">FavoritesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoritesPageModule-548c50a435223ae46655b5cf5ea3423b"' : 'data-target="#xs-components-links-module-FavoritesPageModule-548c50a435223ae46655b5cf5ea3423b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoritesPageModule-548c50a435223ae46655b5cf5ea3423b"' :
                                            'id="xs-components-links-module-FavoritesPageModule-548c50a435223ae46655b5cf5ea3423b"' }>
                                            <li class="link">
                                                <a href="components/FavoritesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FavoritesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesPageRoutingModule.html" data-type="entity-link">FavoritesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' : 'data-target="#xs-components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' :
                                            'id="xs-components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageModule.html" data-type="entity-link">ListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPageModule-2bc94d67a17b0ceec0eff229ac0d424c"' : 'data-target="#xs-components-links-module-ListPageModule-2bc94d67a17b0ceec0eff229ac0d424c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPageModule-2bc94d67a17b0ceec0eff229ac0d424c"' :
                                            'id="xs-components-links-module-ListPageModule-2bc94d67a17b0ceec0eff229ac0d424c"' }>
                                            <li class="link">
                                                <a href="components/ListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageRoutingModule.html" data-type="entity-link">ListPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapPageModule.html" data-type="entity-link">MapPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MapPageModule-b7c6544551c10b63483ff886af17b010"' : 'data-target="#xs-components-links-module-MapPageModule-b7c6544551c10b63483ff886af17b010"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapPageModule-b7c6544551c10b63483ff886af17b010"' :
                                            'id="xs-components-links-module-MapPageModule-b7c6544551c10b63483ff886af17b010"' }>
                                            <li class="link">
                                                <a href="components/MapPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MapPageRoutingModule.html" data-type="entity-link">MapPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegionsPageModule.html" data-type="entity-link">RegionsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegionsPageModule-d26324456e317bb6430d5692d306b212"' : 'data-target="#xs-components-links-module-RegionsPageModule-d26324456e317bb6430d5692d306b212"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegionsPageModule-d26324456e317bb6430d5692d306b212"' :
                                            'id="xs-components-links-module-RegionsPageModule-d26324456e317bb6430d5692d306b212"' }>
                                            <li class="link">
                                                <a href="components/RegionsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegionsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegionsPageRoutingModule.html" data-type="entity-link">RegionsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RequestPageModule.html" data-type="entity-link">RequestPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RequestPageModule-9bfdad0f52c902ea8570fd6fac5198bb"' : 'data-target="#xs-components-links-module-RequestPageModule-9bfdad0f52c902ea8570fd6fac5198bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestPageModule-9bfdad0f52c902ea8570fd6fac5198bb"' :
                                            'id="xs-components-links-module-RequestPageModule-9bfdad0f52c902ea8570fd6fac5198bb"' }>
                                            <li class="link">
                                                <a href="components/RequestPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestPageRoutingModule.html" data-type="entity-link">RequestPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SlideshowPageModule.html" data-type="entity-link">SlideshowPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SlideshowPageModule-926c1f5f103314535eee24cc0daed9e1"' : 'data-target="#xs-components-links-module-SlideshowPageModule-926c1f5f103314535eee24cc0daed9e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SlideshowPageModule-926c1f5f103314535eee24cc0daed9e1"' :
                                            'id="xs-components-links-module-SlideshowPageModule-926c1f5f103314535eee24cc0daed9e1"' }>
                                            <li class="link">
                                                <a href="components/SlideshowPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SlideshowPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SlideshowPageRoutingModule.html" data-type="entity-link">SlideshowPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TourTypesPageModule.html" data-type="entity-link">TourTypesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TourTypesPageModule-1d1b800b6e28d79a68bd365ddbb5c290"' : 'data-target="#xs-components-links-module-TourTypesPageModule-1d1b800b6e28d79a68bd365ddbb5c290"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TourTypesPageModule-1d1b800b6e28d79a68bd365ddbb5c290"' :
                                            'id="xs-components-links-module-TourTypesPageModule-1d1b800b6e28d79a68bd365ddbb5c290"' }>
                                            <li class="link">
                                                <a href="components/TourTypesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TourTypesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TourTypesPageRoutingModule.html" data-type="entity-link">TourTypesPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BobToursService.html" data-type="entity-link">BobToursService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FavoritesService.html" data-type="entity-link">FavoritesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});