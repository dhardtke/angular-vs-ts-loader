import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub862Component} from "./stub862.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub862Component
        }])
    ],
    declarations: [
        Stub862Component
    ]
})
export class Stub862Module {

}
