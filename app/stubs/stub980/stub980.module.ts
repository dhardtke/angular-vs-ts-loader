import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub980Component} from "./stub980.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub980Component
        }])
    ],
    declarations: [
        Stub980Component
    ]
})
export class Stub980Module {

}
