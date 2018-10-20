import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub565Component} from "./stub565.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub565Component
        }])
    ],
    declarations: [
        Stub565Component
    ]
})
export class Stub565Module {

}
