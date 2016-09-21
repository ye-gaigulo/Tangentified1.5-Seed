import RxServiceExample from './rx-example.service';
import MobxServiceExample from './mobx-example.service';
import AuthenticationService from './authentication.service';

//Register your services
export default angular.module('core.services', [])
    .service('RxServiceExample', RxServiceExample)
    .service('MobxServiceExample', MobxServiceExample)
    .service('AuthenticationService', AuthenticationService);
