import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub251Component} from "./stub251.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub251Component
        }])
    ],
    declarations: [
        Stub251Component
    ]
})
export class Stub251Module {

}
