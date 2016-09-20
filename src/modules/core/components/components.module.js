import LoginComponent from './login/login.component';
import LogoutComponent from './logout/logout.component';
import ContainerFluidComponent from './container-fluid/container-fluid.component';


export default angular.module('core.components', [])
    .component('containerFluid', ContainerFluidComponent)
    .component('login', LoginComponent)
    .component('logout', LogoutComponent);
