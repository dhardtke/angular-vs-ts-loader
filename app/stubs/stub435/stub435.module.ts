import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub435Component} from "./stub435.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub435Component
        }])
    ],
    declarations: [
        Stub435Component
    ]
})
export class Stub435Module {

}
