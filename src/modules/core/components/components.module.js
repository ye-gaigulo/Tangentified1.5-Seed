import LoginComponent from './login/login.component';
import ContainerFluidComponent from './container-fluid/container-fluid.component';


export default angular.module('core.components', [])
  .component('contrainerFluid', ContainerFluidComponent)
  .component('login', LoginComponent);
