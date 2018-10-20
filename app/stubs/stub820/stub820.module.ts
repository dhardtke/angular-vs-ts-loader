import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub820Component} from "./stub820.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub820Component
        }])
    ],
    declarations: [
        Stub820Component
    ]
})
export class Stub820Module {

}
