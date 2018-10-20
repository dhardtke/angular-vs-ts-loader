import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub804Component} from "./stub804.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub804Component
        }])
    ],
    declarations: [
        Stub804Component
    ]
})
export class Stub804Module {

}
