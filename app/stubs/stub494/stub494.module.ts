import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub494Component} from "./stub494.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub494Component
        }])
    ],
    declarations: [
        Stub494Component
    ]
})
export class Stub494Module {

}
