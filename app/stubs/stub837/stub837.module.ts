import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub837Component} from "./stub837.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub837Component
        }])
    ],
    declarations: [
        Stub837Component
    ]
})
export class Stub837Module {

}
