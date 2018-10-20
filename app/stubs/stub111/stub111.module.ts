import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub111Component} from "./stub111.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub111Component
        }])
    ],
    declarations: [
        Stub111Component
    ]
})
export class Stub111Module {

}
