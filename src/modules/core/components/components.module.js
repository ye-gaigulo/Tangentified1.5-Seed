import AppComponent from './app/app.component';
import ListComponent from './list/list.component';
import ContainerFluidComponent from './container-fluid/container-fluid.component';
import LoginComponent from './login/login.component';
import LogoutComponent from './logout/logout.component';

export default angular.module('core.components', [])
    .component('app', AppComponent)
    .component('list', ListComponent)
    .component('containerFluid', ContainerFluidComponent)
    .component('login', LoginComponent)
    .component('logout', LogoutComponent);
