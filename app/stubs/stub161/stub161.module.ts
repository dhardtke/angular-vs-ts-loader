import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub161Component} from "./stub161.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub161Component
        }])
    ],
    declarations: [
        Stub161Component
    ]
})
export class Stub161Module {

}
