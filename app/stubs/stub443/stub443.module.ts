import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub443Component} from "./stub443.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub443Component
        }])
    ],
    declarations: [
        Stub443Component
    ]
})
export class Stub443Module {

}
