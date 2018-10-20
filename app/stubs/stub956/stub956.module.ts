import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub956Component} from "./stub956.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub956Component
        }])
    ],
    declarations: [
        Stub956Component
    ]
})
export class Stub956Module {

}
