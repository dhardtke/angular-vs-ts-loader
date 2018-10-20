import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub509Component} from "./stub509.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub509Component
        }])
    ],
    declarations: [
        Stub509Component
    ]
})
export class Stub509Module {

}
