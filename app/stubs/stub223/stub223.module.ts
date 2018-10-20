import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub223Component} from "./stub223.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub223Component
        }])
    ],
    declarations: [
        Stub223Component
    ]
})
export class Stub223Module {

}
