import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub727Component} from "./stub727.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub727Component
        }])
    ],
    declarations: [
        Stub727Component
    ]
})
export class Stub727Module {

}
