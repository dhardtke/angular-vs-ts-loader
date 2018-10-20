import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub55Component} from "./stub55.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub55Component
        }])
    ],
    declarations: [
        Stub55Component
    ]
})
export class Stub55Module {

}
