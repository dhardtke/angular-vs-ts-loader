import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub940Component} from "./stub940.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub940Component
        }])
    ],
    declarations: [
        Stub940Component
    ]
})
export class Stub940Module {

}
