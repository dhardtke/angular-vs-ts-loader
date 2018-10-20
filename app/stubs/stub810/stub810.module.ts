import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub810Component} from "./stub810.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub810Component
        }])
    ],
    declarations: [
        Stub810Component
    ]
})
export class Stub810Module {

}
