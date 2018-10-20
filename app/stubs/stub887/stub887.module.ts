import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub887Component} from "./stub887.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub887Component
        }])
    ],
    declarations: [
        Stub887Component
    ]
})
export class Stub887Module {

}
