import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub431Component} from "./stub431.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub431Component
        }])
    ],
    declarations: [
        Stub431Component
    ]
})
export class Stub431Module {

}
