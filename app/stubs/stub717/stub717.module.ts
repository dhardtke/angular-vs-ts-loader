import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub717Component} from "./stub717.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub717Component
        }])
    ],
    declarations: [
        Stub717Component
    ]
})
export class Stub717Module {

}
